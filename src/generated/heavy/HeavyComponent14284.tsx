'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14284<T> = T extends (infer U)[]
  ? DeepReadonlyArray14284<U>
  : T extends object
  ? DeepReadonlyObject14284<T>
  : T;

interface DeepReadonlyArray14284<T> extends ReadonlyArray<DeepReadonly14284<T>> {}

type DeepReadonlyObject14284<T> = {
  readonly [P in keyof T]: DeepReadonly14284<T[P]>;
};

type UnionToIntersection14284<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14284<T> = UnionToIntersection14284<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14284<T extends unknown[], V> = [...T, V];

type TuplifyUnion14284<T, L = LastOf14284<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14284<TuplifyUnion14284<Exclude<T, L>>, L>;

type DeepPartial14284<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14284<T[P]> }
  : T;

type Paths14284<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14284<K, Paths14284<T[K], Prev14284[D]>> : never }[keyof T]
  : never;

type Prev14284 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14284<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14284 {
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

type ConfigPaths14284 = Paths14284<NestedConfig14284>;

interface HeavyProps14284 {
  config: DeepPartial14284<NestedConfig14284>;
  path?: ConfigPaths14284;
}

const HeavyComponent14284 = memo(function HeavyComponent14284({ config }: HeavyProps14284) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14284) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14284 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14284: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14284.displayName = 'HeavyComponent14284';
export default HeavyComponent14284;
