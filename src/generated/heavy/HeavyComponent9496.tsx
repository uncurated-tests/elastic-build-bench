'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9496<T> = T extends (infer U)[]
  ? DeepReadonlyArray9496<U>
  : T extends object
  ? DeepReadonlyObject9496<T>
  : T;

interface DeepReadonlyArray9496<T> extends ReadonlyArray<DeepReadonly9496<T>> {}

type DeepReadonlyObject9496<T> = {
  readonly [P in keyof T]: DeepReadonly9496<T[P]>;
};

type UnionToIntersection9496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9496<T> = UnionToIntersection9496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9496<T extends unknown[], V> = [...T, V];

type TuplifyUnion9496<T, L = LastOf9496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9496<TuplifyUnion9496<Exclude<T, L>>, L>;

type DeepPartial9496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9496<T[P]> }
  : T;

type Paths9496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9496<K, Paths9496<T[K], Prev9496[D]>> : never }[keyof T]
  : never;

type Prev9496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9496 {
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

type ConfigPaths9496 = Paths9496<NestedConfig9496>;

interface HeavyProps9496 {
  config: DeepPartial9496<NestedConfig9496>;
  path?: ConfigPaths9496;
}

const HeavyComponent9496 = memo(function HeavyComponent9496({ config }: HeavyProps9496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9496.displayName = 'HeavyComponent9496';
export default HeavyComponent9496;
