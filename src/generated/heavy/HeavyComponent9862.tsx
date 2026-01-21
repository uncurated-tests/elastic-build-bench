'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9862<T> = T extends (infer U)[]
  ? DeepReadonlyArray9862<U>
  : T extends object
  ? DeepReadonlyObject9862<T>
  : T;

interface DeepReadonlyArray9862<T> extends ReadonlyArray<DeepReadonly9862<T>> {}

type DeepReadonlyObject9862<T> = {
  readonly [P in keyof T]: DeepReadonly9862<T[P]>;
};

type UnionToIntersection9862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9862<T> = UnionToIntersection9862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9862<T extends unknown[], V> = [...T, V];

type TuplifyUnion9862<T, L = LastOf9862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9862<TuplifyUnion9862<Exclude<T, L>>, L>;

type DeepPartial9862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9862<T[P]> }
  : T;

type Paths9862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9862<K, Paths9862<T[K], Prev9862[D]>> : never }[keyof T]
  : never;

type Prev9862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9862 {
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

type ConfigPaths9862 = Paths9862<NestedConfig9862>;

interface HeavyProps9862 {
  config: DeepPartial9862<NestedConfig9862>;
  path?: ConfigPaths9862;
}

const HeavyComponent9862 = memo(function HeavyComponent9862({ config }: HeavyProps9862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9862.displayName = 'HeavyComponent9862';
export default HeavyComponent9862;
