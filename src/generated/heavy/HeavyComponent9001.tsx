'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9001<T> = T extends (infer U)[]
  ? DeepReadonlyArray9001<U>
  : T extends object
  ? DeepReadonlyObject9001<T>
  : T;

interface DeepReadonlyArray9001<T> extends ReadonlyArray<DeepReadonly9001<T>> {}

type DeepReadonlyObject9001<T> = {
  readonly [P in keyof T]: DeepReadonly9001<T[P]>;
};

type UnionToIntersection9001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9001<T> = UnionToIntersection9001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9001<T extends unknown[], V> = [...T, V];

type TuplifyUnion9001<T, L = LastOf9001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9001<TuplifyUnion9001<Exclude<T, L>>, L>;

type DeepPartial9001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9001<T[P]> }
  : T;

type Paths9001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9001<K, Paths9001<T[K], Prev9001[D]>> : never }[keyof T]
  : never;

type Prev9001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9001 {
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

type ConfigPaths9001 = Paths9001<NestedConfig9001>;

interface HeavyProps9001 {
  config: DeepPartial9001<NestedConfig9001>;
  path?: ConfigPaths9001;
}

const HeavyComponent9001 = memo(function HeavyComponent9001({ config }: HeavyProps9001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9001.displayName = 'HeavyComponent9001';
export default HeavyComponent9001;
