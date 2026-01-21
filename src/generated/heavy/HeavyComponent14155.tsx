'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14155<T> = T extends (infer U)[]
  ? DeepReadonlyArray14155<U>
  : T extends object
  ? DeepReadonlyObject14155<T>
  : T;

interface DeepReadonlyArray14155<T> extends ReadonlyArray<DeepReadonly14155<T>> {}

type DeepReadonlyObject14155<T> = {
  readonly [P in keyof T]: DeepReadonly14155<T[P]>;
};

type UnionToIntersection14155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14155<T> = UnionToIntersection14155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14155<T extends unknown[], V> = [...T, V];

type TuplifyUnion14155<T, L = LastOf14155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14155<TuplifyUnion14155<Exclude<T, L>>, L>;

type DeepPartial14155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14155<T[P]> }
  : T;

type Paths14155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14155<K, Paths14155<T[K], Prev14155[D]>> : never }[keyof T]
  : never;

type Prev14155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14155 {
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

type ConfigPaths14155 = Paths14155<NestedConfig14155>;

interface HeavyProps14155 {
  config: DeepPartial14155<NestedConfig14155>;
  path?: ConfigPaths14155;
}

const HeavyComponent14155 = memo(function HeavyComponent14155({ config }: HeavyProps14155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14155.displayName = 'HeavyComponent14155';
export default HeavyComponent14155;
