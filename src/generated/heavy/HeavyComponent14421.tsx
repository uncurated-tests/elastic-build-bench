'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14421<T> = T extends (infer U)[]
  ? DeepReadonlyArray14421<U>
  : T extends object
  ? DeepReadonlyObject14421<T>
  : T;

interface DeepReadonlyArray14421<T> extends ReadonlyArray<DeepReadonly14421<T>> {}

type DeepReadonlyObject14421<T> = {
  readonly [P in keyof T]: DeepReadonly14421<T[P]>;
};

type UnionToIntersection14421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14421<T> = UnionToIntersection14421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14421<T extends unknown[], V> = [...T, V];

type TuplifyUnion14421<T, L = LastOf14421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14421<TuplifyUnion14421<Exclude<T, L>>, L>;

type DeepPartial14421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14421<T[P]> }
  : T;

type Paths14421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14421<K, Paths14421<T[K], Prev14421[D]>> : never }[keyof T]
  : never;

type Prev14421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14421 {
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

type ConfigPaths14421 = Paths14421<NestedConfig14421>;

interface HeavyProps14421 {
  config: DeepPartial14421<NestedConfig14421>;
  path?: ConfigPaths14421;
}

const HeavyComponent14421 = memo(function HeavyComponent14421({ config }: HeavyProps14421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14421.displayName = 'HeavyComponent14421';
export default HeavyComponent14421;
