'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14405<T> = T extends (infer U)[]
  ? DeepReadonlyArray14405<U>
  : T extends object
  ? DeepReadonlyObject14405<T>
  : T;

interface DeepReadonlyArray14405<T> extends ReadonlyArray<DeepReadonly14405<T>> {}

type DeepReadonlyObject14405<T> = {
  readonly [P in keyof T]: DeepReadonly14405<T[P]>;
};

type UnionToIntersection14405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14405<T> = UnionToIntersection14405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14405<T extends unknown[], V> = [...T, V];

type TuplifyUnion14405<T, L = LastOf14405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14405<TuplifyUnion14405<Exclude<T, L>>, L>;

type DeepPartial14405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14405<T[P]> }
  : T;

type Paths14405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14405<K, Paths14405<T[K], Prev14405[D]>> : never }[keyof T]
  : never;

type Prev14405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14405 {
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

type ConfigPaths14405 = Paths14405<NestedConfig14405>;

interface HeavyProps14405 {
  config: DeepPartial14405<NestedConfig14405>;
  path?: ConfigPaths14405;
}

const HeavyComponent14405 = memo(function HeavyComponent14405({ config }: HeavyProps14405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14405.displayName = 'HeavyComponent14405';
export default HeavyComponent14405;
