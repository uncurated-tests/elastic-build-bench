'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14212<T> = T extends (infer U)[]
  ? DeepReadonlyArray14212<U>
  : T extends object
  ? DeepReadonlyObject14212<T>
  : T;

interface DeepReadonlyArray14212<T> extends ReadonlyArray<DeepReadonly14212<T>> {}

type DeepReadonlyObject14212<T> = {
  readonly [P in keyof T]: DeepReadonly14212<T[P]>;
};

type UnionToIntersection14212<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14212<T> = UnionToIntersection14212<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14212<T extends unknown[], V> = [...T, V];

type TuplifyUnion14212<T, L = LastOf14212<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14212<TuplifyUnion14212<Exclude<T, L>>, L>;

type DeepPartial14212<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14212<T[P]> }
  : T;

type Paths14212<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14212<K, Paths14212<T[K], Prev14212[D]>> : never }[keyof T]
  : never;

type Prev14212 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14212<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14212 {
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

type ConfigPaths14212 = Paths14212<NestedConfig14212>;

interface HeavyProps14212 {
  config: DeepPartial14212<NestedConfig14212>;
  path?: ConfigPaths14212;
}

const HeavyComponent14212 = memo(function HeavyComponent14212({ config }: HeavyProps14212) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14212) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14212 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14212: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14212.displayName = 'HeavyComponent14212';
export default HeavyComponent14212;
