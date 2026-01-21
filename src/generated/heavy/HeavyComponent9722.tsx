'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9722<T> = T extends (infer U)[]
  ? DeepReadonlyArray9722<U>
  : T extends object
  ? DeepReadonlyObject9722<T>
  : T;

interface DeepReadonlyArray9722<T> extends ReadonlyArray<DeepReadonly9722<T>> {}

type DeepReadonlyObject9722<T> = {
  readonly [P in keyof T]: DeepReadonly9722<T[P]>;
};

type UnionToIntersection9722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9722<T> = UnionToIntersection9722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9722<T extends unknown[], V> = [...T, V];

type TuplifyUnion9722<T, L = LastOf9722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9722<TuplifyUnion9722<Exclude<T, L>>, L>;

type DeepPartial9722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9722<T[P]> }
  : T;

type Paths9722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9722<K, Paths9722<T[K], Prev9722[D]>> : never }[keyof T]
  : never;

type Prev9722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9722 {
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

type ConfigPaths9722 = Paths9722<NestedConfig9722>;

interface HeavyProps9722 {
  config: DeepPartial9722<NestedConfig9722>;
  path?: ConfigPaths9722;
}

const HeavyComponent9722 = memo(function HeavyComponent9722({ config }: HeavyProps9722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9722.displayName = 'HeavyComponent9722';
export default HeavyComponent9722;
