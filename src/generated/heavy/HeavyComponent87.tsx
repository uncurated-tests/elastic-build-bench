'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly87<T> = T extends (infer U)[]
  ? DeepReadonlyArray87<U>
  : T extends object
  ? DeepReadonlyObject87<T>
  : T;

interface DeepReadonlyArray87<T> extends ReadonlyArray<DeepReadonly87<T>> {}

type DeepReadonlyObject87<T> = {
  readonly [P in keyof T]: DeepReadonly87<T[P]>;
};

type UnionToIntersection87<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf87<T> = UnionToIntersection87<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push87<T extends unknown[], V> = [...T, V];

type TuplifyUnion87<T, L = LastOf87<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push87<TuplifyUnion87<Exclude<T, L>>, L>;

type DeepPartial87<T> = T extends object
  ? { [P in keyof T]?: DeepPartial87<T[P]> }
  : T;

type Paths87<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join87<K, Paths87<T[K], Prev87[D]>> : never }[keyof T]
  : never;

type Prev87 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join87<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig87 {
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

type ConfigPaths87 = Paths87<NestedConfig87>;

interface HeavyProps87 {
  config: DeepPartial87<NestedConfig87>;
  path?: ConfigPaths87;
}

const HeavyComponent87 = memo(function HeavyComponent87({ config }: HeavyProps87) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 87) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-87 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H87: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent87.displayName = 'HeavyComponent87';
export default HeavyComponent87;
