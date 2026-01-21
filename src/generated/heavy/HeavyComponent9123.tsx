'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9123<T> = T extends (infer U)[]
  ? DeepReadonlyArray9123<U>
  : T extends object
  ? DeepReadonlyObject9123<T>
  : T;

interface DeepReadonlyArray9123<T> extends ReadonlyArray<DeepReadonly9123<T>> {}

type DeepReadonlyObject9123<T> = {
  readonly [P in keyof T]: DeepReadonly9123<T[P]>;
};

type UnionToIntersection9123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9123<T> = UnionToIntersection9123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9123<T extends unknown[], V> = [...T, V];

type TuplifyUnion9123<T, L = LastOf9123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9123<TuplifyUnion9123<Exclude<T, L>>, L>;

type DeepPartial9123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9123<T[P]> }
  : T;

type Paths9123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9123<K, Paths9123<T[K], Prev9123[D]>> : never }[keyof T]
  : never;

type Prev9123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9123 {
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

type ConfigPaths9123 = Paths9123<NestedConfig9123>;

interface HeavyProps9123 {
  config: DeepPartial9123<NestedConfig9123>;
  path?: ConfigPaths9123;
}

const HeavyComponent9123 = memo(function HeavyComponent9123({ config }: HeavyProps9123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9123.displayName = 'HeavyComponent9123';
export default HeavyComponent9123;
