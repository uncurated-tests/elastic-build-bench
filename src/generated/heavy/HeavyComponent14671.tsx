'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14671<T> = T extends (infer U)[]
  ? DeepReadonlyArray14671<U>
  : T extends object
  ? DeepReadonlyObject14671<T>
  : T;

interface DeepReadonlyArray14671<T> extends ReadonlyArray<DeepReadonly14671<T>> {}

type DeepReadonlyObject14671<T> = {
  readonly [P in keyof T]: DeepReadonly14671<T[P]>;
};

type UnionToIntersection14671<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14671<T> = UnionToIntersection14671<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14671<T extends unknown[], V> = [...T, V];

type TuplifyUnion14671<T, L = LastOf14671<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14671<TuplifyUnion14671<Exclude<T, L>>, L>;

type DeepPartial14671<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14671<T[P]> }
  : T;

type Paths14671<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14671<K, Paths14671<T[K], Prev14671[D]>> : never }[keyof T]
  : never;

type Prev14671 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14671<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14671 {
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

type ConfigPaths14671 = Paths14671<NestedConfig14671>;

interface HeavyProps14671 {
  config: DeepPartial14671<NestedConfig14671>;
  path?: ConfigPaths14671;
}

const HeavyComponent14671 = memo(function HeavyComponent14671({ config }: HeavyProps14671) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14671) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14671 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14671: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14671.displayName = 'HeavyComponent14671';
export default HeavyComponent14671;
