'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9660<T> = T extends (infer U)[]
  ? DeepReadonlyArray9660<U>
  : T extends object
  ? DeepReadonlyObject9660<T>
  : T;

interface DeepReadonlyArray9660<T> extends ReadonlyArray<DeepReadonly9660<T>> {}

type DeepReadonlyObject9660<T> = {
  readonly [P in keyof T]: DeepReadonly9660<T[P]>;
};

type UnionToIntersection9660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9660<T> = UnionToIntersection9660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9660<T extends unknown[], V> = [...T, V];

type TuplifyUnion9660<T, L = LastOf9660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9660<TuplifyUnion9660<Exclude<T, L>>, L>;

type DeepPartial9660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9660<T[P]> }
  : T;

type Paths9660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9660<K, Paths9660<T[K], Prev9660[D]>> : never }[keyof T]
  : never;

type Prev9660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9660 {
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

type ConfigPaths9660 = Paths9660<NestedConfig9660>;

interface HeavyProps9660 {
  config: DeepPartial9660<NestedConfig9660>;
  path?: ConfigPaths9660;
}

const HeavyComponent9660 = memo(function HeavyComponent9660({ config }: HeavyProps9660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9660.displayName = 'HeavyComponent9660';
export default HeavyComponent9660;
