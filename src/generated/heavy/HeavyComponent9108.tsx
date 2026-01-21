'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9108<T> = T extends (infer U)[]
  ? DeepReadonlyArray9108<U>
  : T extends object
  ? DeepReadonlyObject9108<T>
  : T;

interface DeepReadonlyArray9108<T> extends ReadonlyArray<DeepReadonly9108<T>> {}

type DeepReadonlyObject9108<T> = {
  readonly [P in keyof T]: DeepReadonly9108<T[P]>;
};

type UnionToIntersection9108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9108<T> = UnionToIntersection9108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9108<T extends unknown[], V> = [...T, V];

type TuplifyUnion9108<T, L = LastOf9108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9108<TuplifyUnion9108<Exclude<T, L>>, L>;

type DeepPartial9108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9108<T[P]> }
  : T;

type Paths9108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9108<K, Paths9108<T[K], Prev9108[D]>> : never }[keyof T]
  : never;

type Prev9108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9108 {
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

type ConfigPaths9108 = Paths9108<NestedConfig9108>;

interface HeavyProps9108 {
  config: DeepPartial9108<NestedConfig9108>;
  path?: ConfigPaths9108;
}

const HeavyComponent9108 = memo(function HeavyComponent9108({ config }: HeavyProps9108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9108.displayName = 'HeavyComponent9108';
export default HeavyComponent9108;
