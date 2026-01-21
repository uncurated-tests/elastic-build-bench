'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9251<T> = T extends (infer U)[]
  ? DeepReadonlyArray9251<U>
  : T extends object
  ? DeepReadonlyObject9251<T>
  : T;

interface DeepReadonlyArray9251<T> extends ReadonlyArray<DeepReadonly9251<T>> {}

type DeepReadonlyObject9251<T> = {
  readonly [P in keyof T]: DeepReadonly9251<T[P]>;
};

type UnionToIntersection9251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9251<T> = UnionToIntersection9251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9251<T extends unknown[], V> = [...T, V];

type TuplifyUnion9251<T, L = LastOf9251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9251<TuplifyUnion9251<Exclude<T, L>>, L>;

type DeepPartial9251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9251<T[P]> }
  : T;

type Paths9251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9251<K, Paths9251<T[K], Prev9251[D]>> : never }[keyof T]
  : never;

type Prev9251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9251 {
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

type ConfigPaths9251 = Paths9251<NestedConfig9251>;

interface HeavyProps9251 {
  config: DeepPartial9251<NestedConfig9251>;
  path?: ConfigPaths9251;
}

const HeavyComponent9251 = memo(function HeavyComponent9251({ config }: HeavyProps9251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9251.displayName = 'HeavyComponent9251';
export default HeavyComponent9251;
