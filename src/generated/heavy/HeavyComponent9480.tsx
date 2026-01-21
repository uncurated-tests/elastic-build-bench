'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9480<T> = T extends (infer U)[]
  ? DeepReadonlyArray9480<U>
  : T extends object
  ? DeepReadonlyObject9480<T>
  : T;

interface DeepReadonlyArray9480<T> extends ReadonlyArray<DeepReadonly9480<T>> {}

type DeepReadonlyObject9480<T> = {
  readonly [P in keyof T]: DeepReadonly9480<T[P]>;
};

type UnionToIntersection9480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9480<T> = UnionToIntersection9480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9480<T extends unknown[], V> = [...T, V];

type TuplifyUnion9480<T, L = LastOf9480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9480<TuplifyUnion9480<Exclude<T, L>>, L>;

type DeepPartial9480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9480<T[P]> }
  : T;

type Paths9480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9480<K, Paths9480<T[K], Prev9480[D]>> : never }[keyof T]
  : never;

type Prev9480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9480 {
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

type ConfigPaths9480 = Paths9480<NestedConfig9480>;

interface HeavyProps9480 {
  config: DeepPartial9480<NestedConfig9480>;
  path?: ConfigPaths9480;
}

const HeavyComponent9480 = memo(function HeavyComponent9480({ config }: HeavyProps9480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9480.displayName = 'HeavyComponent9480';
export default HeavyComponent9480;
