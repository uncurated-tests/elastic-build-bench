'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14369<T> = T extends (infer U)[]
  ? DeepReadonlyArray14369<U>
  : T extends object
  ? DeepReadonlyObject14369<T>
  : T;

interface DeepReadonlyArray14369<T> extends ReadonlyArray<DeepReadonly14369<T>> {}

type DeepReadonlyObject14369<T> = {
  readonly [P in keyof T]: DeepReadonly14369<T[P]>;
};

type UnionToIntersection14369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14369<T> = UnionToIntersection14369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14369<T extends unknown[], V> = [...T, V];

type TuplifyUnion14369<T, L = LastOf14369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14369<TuplifyUnion14369<Exclude<T, L>>, L>;

type DeepPartial14369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14369<T[P]> }
  : T;

type Paths14369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14369<K, Paths14369<T[K], Prev14369[D]>> : never }[keyof T]
  : never;

type Prev14369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14369 {
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

type ConfigPaths14369 = Paths14369<NestedConfig14369>;

interface HeavyProps14369 {
  config: DeepPartial14369<NestedConfig14369>;
  path?: ConfigPaths14369;
}

const HeavyComponent14369 = memo(function HeavyComponent14369({ config }: HeavyProps14369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14369.displayName = 'HeavyComponent14369';
export default HeavyComponent14369;
