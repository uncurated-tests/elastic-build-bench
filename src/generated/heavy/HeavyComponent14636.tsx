'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14636<T> = T extends (infer U)[]
  ? DeepReadonlyArray14636<U>
  : T extends object
  ? DeepReadonlyObject14636<T>
  : T;

interface DeepReadonlyArray14636<T> extends ReadonlyArray<DeepReadonly14636<T>> {}

type DeepReadonlyObject14636<T> = {
  readonly [P in keyof T]: DeepReadonly14636<T[P]>;
};

type UnionToIntersection14636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14636<T> = UnionToIntersection14636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14636<T extends unknown[], V> = [...T, V];

type TuplifyUnion14636<T, L = LastOf14636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14636<TuplifyUnion14636<Exclude<T, L>>, L>;

type DeepPartial14636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14636<T[P]> }
  : T;

type Paths14636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14636<K, Paths14636<T[K], Prev14636[D]>> : never }[keyof T]
  : never;

type Prev14636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14636 {
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

type ConfigPaths14636 = Paths14636<NestedConfig14636>;

interface HeavyProps14636 {
  config: DeepPartial14636<NestedConfig14636>;
  path?: ConfigPaths14636;
}

const HeavyComponent14636 = memo(function HeavyComponent14636({ config }: HeavyProps14636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14636.displayName = 'HeavyComponent14636';
export default HeavyComponent14636;
