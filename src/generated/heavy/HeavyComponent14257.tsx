'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14257<T> = T extends (infer U)[]
  ? DeepReadonlyArray14257<U>
  : T extends object
  ? DeepReadonlyObject14257<T>
  : T;

interface DeepReadonlyArray14257<T> extends ReadonlyArray<DeepReadonly14257<T>> {}

type DeepReadonlyObject14257<T> = {
  readonly [P in keyof T]: DeepReadonly14257<T[P]>;
};

type UnionToIntersection14257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14257<T> = UnionToIntersection14257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14257<T extends unknown[], V> = [...T, V];

type TuplifyUnion14257<T, L = LastOf14257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14257<TuplifyUnion14257<Exclude<T, L>>, L>;

type DeepPartial14257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14257<T[P]> }
  : T;

type Paths14257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14257<K, Paths14257<T[K], Prev14257[D]>> : never }[keyof T]
  : never;

type Prev14257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14257 {
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

type ConfigPaths14257 = Paths14257<NestedConfig14257>;

interface HeavyProps14257 {
  config: DeepPartial14257<NestedConfig14257>;
  path?: ConfigPaths14257;
}

const HeavyComponent14257 = memo(function HeavyComponent14257({ config }: HeavyProps14257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14257.displayName = 'HeavyComponent14257';
export default HeavyComponent14257;
