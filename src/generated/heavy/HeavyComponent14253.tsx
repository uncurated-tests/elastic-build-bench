'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14253<T> = T extends (infer U)[]
  ? DeepReadonlyArray14253<U>
  : T extends object
  ? DeepReadonlyObject14253<T>
  : T;

interface DeepReadonlyArray14253<T> extends ReadonlyArray<DeepReadonly14253<T>> {}

type DeepReadonlyObject14253<T> = {
  readonly [P in keyof T]: DeepReadonly14253<T[P]>;
};

type UnionToIntersection14253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14253<T> = UnionToIntersection14253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14253<T extends unknown[], V> = [...T, V];

type TuplifyUnion14253<T, L = LastOf14253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14253<TuplifyUnion14253<Exclude<T, L>>, L>;

type DeepPartial14253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14253<T[P]> }
  : T;

type Paths14253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14253<K, Paths14253<T[K], Prev14253[D]>> : never }[keyof T]
  : never;

type Prev14253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14253 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14253 = Paths14253<NestedConfig14253>;

interface HeavyProps14253 {
  config: DeepPartial14253<NestedConfig14253>;
  path?: ConfigPaths14253;
}

const HeavyComponent14253 = memo(function HeavyComponent14253({ config }: HeavyProps14253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14253.displayName = 'HeavyComponent14253';
export default HeavyComponent14253;
