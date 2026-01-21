'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9127<T> = T extends (infer U)[]
  ? DeepReadonlyArray9127<U>
  : T extends object
  ? DeepReadonlyObject9127<T>
  : T;

interface DeepReadonlyArray9127<T> extends ReadonlyArray<DeepReadonly9127<T>> {}

type DeepReadonlyObject9127<T> = {
  readonly [P in keyof T]: DeepReadonly9127<T[P]>;
};

type UnionToIntersection9127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9127<T> = UnionToIntersection9127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9127<T extends unknown[], V> = [...T, V];

type TuplifyUnion9127<T, L = LastOf9127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9127<TuplifyUnion9127<Exclude<T, L>>, L>;

type DeepPartial9127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9127<T[P]> }
  : T;

type Paths9127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9127<K, Paths9127<T[K], Prev9127[D]>> : never }[keyof T]
  : never;

type Prev9127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9127 {
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

type ConfigPaths9127 = Paths9127<NestedConfig9127>;

interface HeavyProps9127 {
  config: DeepPartial9127<NestedConfig9127>;
  path?: ConfigPaths9127;
}

const HeavyComponent9127 = memo(function HeavyComponent9127({ config }: HeavyProps9127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9127.displayName = 'HeavyComponent9127';
export default HeavyComponent9127;
