'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14280<T> = T extends (infer U)[]
  ? DeepReadonlyArray14280<U>
  : T extends object
  ? DeepReadonlyObject14280<T>
  : T;

interface DeepReadonlyArray14280<T> extends ReadonlyArray<DeepReadonly14280<T>> {}

type DeepReadonlyObject14280<T> = {
  readonly [P in keyof T]: DeepReadonly14280<T[P]>;
};

type UnionToIntersection14280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14280<T> = UnionToIntersection14280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14280<T extends unknown[], V> = [...T, V];

type TuplifyUnion14280<T, L = LastOf14280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14280<TuplifyUnion14280<Exclude<T, L>>, L>;

type DeepPartial14280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14280<T[P]> }
  : T;

type Paths14280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14280<K, Paths14280<T[K], Prev14280[D]>> : never }[keyof T]
  : never;

type Prev14280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14280 {
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

type ConfigPaths14280 = Paths14280<NestedConfig14280>;

interface HeavyProps14280 {
  config: DeepPartial14280<NestedConfig14280>;
  path?: ConfigPaths14280;
}

const HeavyComponent14280 = memo(function HeavyComponent14280({ config }: HeavyProps14280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14280.displayName = 'HeavyComponent14280';
export default HeavyComponent14280;
