'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14039<T> = T extends (infer U)[]
  ? DeepReadonlyArray14039<U>
  : T extends object
  ? DeepReadonlyObject14039<T>
  : T;

interface DeepReadonlyArray14039<T> extends ReadonlyArray<DeepReadonly14039<T>> {}

type DeepReadonlyObject14039<T> = {
  readonly [P in keyof T]: DeepReadonly14039<T[P]>;
};

type UnionToIntersection14039<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14039<T> = UnionToIntersection14039<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14039<T extends unknown[], V> = [...T, V];

type TuplifyUnion14039<T, L = LastOf14039<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14039<TuplifyUnion14039<Exclude<T, L>>, L>;

type DeepPartial14039<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14039<T[P]> }
  : T;

type Paths14039<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14039<K, Paths14039<T[K], Prev14039[D]>> : never }[keyof T]
  : never;

type Prev14039 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14039<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14039 {
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

type ConfigPaths14039 = Paths14039<NestedConfig14039>;

interface HeavyProps14039 {
  config: DeepPartial14039<NestedConfig14039>;
  path?: ConfigPaths14039;
}

const HeavyComponent14039 = memo(function HeavyComponent14039({ config }: HeavyProps14039) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14039) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14039 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14039: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14039.displayName = 'HeavyComponent14039';
export default HeavyComponent14039;
