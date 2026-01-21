'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9956<T> = T extends (infer U)[]
  ? DeepReadonlyArray9956<U>
  : T extends object
  ? DeepReadonlyObject9956<T>
  : T;

interface DeepReadonlyArray9956<T> extends ReadonlyArray<DeepReadonly9956<T>> {}

type DeepReadonlyObject9956<T> = {
  readonly [P in keyof T]: DeepReadonly9956<T[P]>;
};

type UnionToIntersection9956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9956<T> = UnionToIntersection9956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9956<T extends unknown[], V> = [...T, V];

type TuplifyUnion9956<T, L = LastOf9956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9956<TuplifyUnion9956<Exclude<T, L>>, L>;

type DeepPartial9956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9956<T[P]> }
  : T;

type Paths9956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9956<K, Paths9956<T[K], Prev9956[D]>> : never }[keyof T]
  : never;

type Prev9956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9956 {
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

type ConfigPaths9956 = Paths9956<NestedConfig9956>;

interface HeavyProps9956 {
  config: DeepPartial9956<NestedConfig9956>;
  path?: ConfigPaths9956;
}

const HeavyComponent9956 = memo(function HeavyComponent9956({ config }: HeavyProps9956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9956.displayName = 'HeavyComponent9956';
export default HeavyComponent9956;
