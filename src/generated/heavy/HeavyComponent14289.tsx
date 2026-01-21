'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14289<T> = T extends (infer U)[]
  ? DeepReadonlyArray14289<U>
  : T extends object
  ? DeepReadonlyObject14289<T>
  : T;

interface DeepReadonlyArray14289<T> extends ReadonlyArray<DeepReadonly14289<T>> {}

type DeepReadonlyObject14289<T> = {
  readonly [P in keyof T]: DeepReadonly14289<T[P]>;
};

type UnionToIntersection14289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14289<T> = UnionToIntersection14289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14289<T extends unknown[], V> = [...T, V];

type TuplifyUnion14289<T, L = LastOf14289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14289<TuplifyUnion14289<Exclude<T, L>>, L>;

type DeepPartial14289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14289<T[P]> }
  : T;

type Paths14289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14289<K, Paths14289<T[K], Prev14289[D]>> : never }[keyof T]
  : never;

type Prev14289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14289 {
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

type ConfigPaths14289 = Paths14289<NestedConfig14289>;

interface HeavyProps14289 {
  config: DeepPartial14289<NestedConfig14289>;
  path?: ConfigPaths14289;
}

const HeavyComponent14289 = memo(function HeavyComponent14289({ config }: HeavyProps14289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14289.displayName = 'HeavyComponent14289';
export default HeavyComponent14289;
