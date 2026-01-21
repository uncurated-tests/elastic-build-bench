'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9007<T> = T extends (infer U)[]
  ? DeepReadonlyArray9007<U>
  : T extends object
  ? DeepReadonlyObject9007<T>
  : T;

interface DeepReadonlyArray9007<T> extends ReadonlyArray<DeepReadonly9007<T>> {}

type DeepReadonlyObject9007<T> = {
  readonly [P in keyof T]: DeepReadonly9007<T[P]>;
};

type UnionToIntersection9007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9007<T> = UnionToIntersection9007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9007<T extends unknown[], V> = [...T, V];

type TuplifyUnion9007<T, L = LastOf9007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9007<TuplifyUnion9007<Exclude<T, L>>, L>;

type DeepPartial9007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9007<T[P]> }
  : T;

type Paths9007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9007<K, Paths9007<T[K], Prev9007[D]>> : never }[keyof T]
  : never;

type Prev9007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9007 {
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

type ConfigPaths9007 = Paths9007<NestedConfig9007>;

interface HeavyProps9007 {
  config: DeepPartial9007<NestedConfig9007>;
  path?: ConfigPaths9007;
}

const HeavyComponent9007 = memo(function HeavyComponent9007({ config }: HeavyProps9007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9007.displayName = 'HeavyComponent9007';
export default HeavyComponent9007;
