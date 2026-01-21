'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9795<T> = T extends (infer U)[]
  ? DeepReadonlyArray9795<U>
  : T extends object
  ? DeepReadonlyObject9795<T>
  : T;

interface DeepReadonlyArray9795<T> extends ReadonlyArray<DeepReadonly9795<T>> {}

type DeepReadonlyObject9795<T> = {
  readonly [P in keyof T]: DeepReadonly9795<T[P]>;
};

type UnionToIntersection9795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9795<T> = UnionToIntersection9795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9795<T extends unknown[], V> = [...T, V];

type TuplifyUnion9795<T, L = LastOf9795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9795<TuplifyUnion9795<Exclude<T, L>>, L>;

type DeepPartial9795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9795<T[P]> }
  : T;

type Paths9795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9795<K, Paths9795<T[K], Prev9795[D]>> : never }[keyof T]
  : never;

type Prev9795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9795 {
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

type ConfigPaths9795 = Paths9795<NestedConfig9795>;

interface HeavyProps9795 {
  config: DeepPartial9795<NestedConfig9795>;
  path?: ConfigPaths9795;
}

const HeavyComponent9795 = memo(function HeavyComponent9795({ config }: HeavyProps9795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9795.displayName = 'HeavyComponent9795';
export default HeavyComponent9795;
