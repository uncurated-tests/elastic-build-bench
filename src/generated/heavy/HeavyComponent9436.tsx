'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9436<T> = T extends (infer U)[]
  ? DeepReadonlyArray9436<U>
  : T extends object
  ? DeepReadonlyObject9436<T>
  : T;

interface DeepReadonlyArray9436<T> extends ReadonlyArray<DeepReadonly9436<T>> {}

type DeepReadonlyObject9436<T> = {
  readonly [P in keyof T]: DeepReadonly9436<T[P]>;
};

type UnionToIntersection9436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9436<T> = UnionToIntersection9436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9436<T extends unknown[], V> = [...T, V];

type TuplifyUnion9436<T, L = LastOf9436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9436<TuplifyUnion9436<Exclude<T, L>>, L>;

type DeepPartial9436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9436<T[P]> }
  : T;

type Paths9436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9436<K, Paths9436<T[K], Prev9436[D]>> : never }[keyof T]
  : never;

type Prev9436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9436 {
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

type ConfigPaths9436 = Paths9436<NestedConfig9436>;

interface HeavyProps9436 {
  config: DeepPartial9436<NestedConfig9436>;
  path?: ConfigPaths9436;
}

const HeavyComponent9436 = memo(function HeavyComponent9436({ config }: HeavyProps9436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9436.displayName = 'HeavyComponent9436';
export default HeavyComponent9436;
