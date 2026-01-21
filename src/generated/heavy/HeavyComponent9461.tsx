'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9461<T> = T extends (infer U)[]
  ? DeepReadonlyArray9461<U>
  : T extends object
  ? DeepReadonlyObject9461<T>
  : T;

interface DeepReadonlyArray9461<T> extends ReadonlyArray<DeepReadonly9461<T>> {}

type DeepReadonlyObject9461<T> = {
  readonly [P in keyof T]: DeepReadonly9461<T[P]>;
};

type UnionToIntersection9461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9461<T> = UnionToIntersection9461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9461<T extends unknown[], V> = [...T, V];

type TuplifyUnion9461<T, L = LastOf9461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9461<TuplifyUnion9461<Exclude<T, L>>, L>;

type DeepPartial9461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9461<T[P]> }
  : T;

type Paths9461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9461<K, Paths9461<T[K], Prev9461[D]>> : never }[keyof T]
  : never;

type Prev9461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9461 {
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

type ConfigPaths9461 = Paths9461<NestedConfig9461>;

interface HeavyProps9461 {
  config: DeepPartial9461<NestedConfig9461>;
  path?: ConfigPaths9461;
}

const HeavyComponent9461 = memo(function HeavyComponent9461({ config }: HeavyProps9461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9461.displayName = 'HeavyComponent9461';
export default HeavyComponent9461;
