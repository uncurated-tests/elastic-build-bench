'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9501<T> = T extends (infer U)[]
  ? DeepReadonlyArray9501<U>
  : T extends object
  ? DeepReadonlyObject9501<T>
  : T;

interface DeepReadonlyArray9501<T> extends ReadonlyArray<DeepReadonly9501<T>> {}

type DeepReadonlyObject9501<T> = {
  readonly [P in keyof T]: DeepReadonly9501<T[P]>;
};

type UnionToIntersection9501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9501<T> = UnionToIntersection9501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9501<T extends unknown[], V> = [...T, V];

type TuplifyUnion9501<T, L = LastOf9501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9501<TuplifyUnion9501<Exclude<T, L>>, L>;

type DeepPartial9501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9501<T[P]> }
  : T;

type Paths9501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9501<K, Paths9501<T[K], Prev9501[D]>> : never }[keyof T]
  : never;

type Prev9501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9501 {
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

type ConfigPaths9501 = Paths9501<NestedConfig9501>;

interface HeavyProps9501 {
  config: DeepPartial9501<NestedConfig9501>;
  path?: ConfigPaths9501;
}

const HeavyComponent9501 = memo(function HeavyComponent9501({ config }: HeavyProps9501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9501.displayName = 'HeavyComponent9501';
export default HeavyComponent9501;
