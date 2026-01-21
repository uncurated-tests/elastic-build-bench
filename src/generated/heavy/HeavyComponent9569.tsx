'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9569<T> = T extends (infer U)[]
  ? DeepReadonlyArray9569<U>
  : T extends object
  ? DeepReadonlyObject9569<T>
  : T;

interface DeepReadonlyArray9569<T> extends ReadonlyArray<DeepReadonly9569<T>> {}

type DeepReadonlyObject9569<T> = {
  readonly [P in keyof T]: DeepReadonly9569<T[P]>;
};

type UnionToIntersection9569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9569<T> = UnionToIntersection9569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9569<T extends unknown[], V> = [...T, V];

type TuplifyUnion9569<T, L = LastOf9569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9569<TuplifyUnion9569<Exclude<T, L>>, L>;

type DeepPartial9569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9569<T[P]> }
  : T;

type Paths9569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9569<K, Paths9569<T[K], Prev9569[D]>> : never }[keyof T]
  : never;

type Prev9569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9569 {
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

type ConfigPaths9569 = Paths9569<NestedConfig9569>;

interface HeavyProps9569 {
  config: DeepPartial9569<NestedConfig9569>;
  path?: ConfigPaths9569;
}

const HeavyComponent9569 = memo(function HeavyComponent9569({ config }: HeavyProps9569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9569.displayName = 'HeavyComponent9569';
export default HeavyComponent9569;
