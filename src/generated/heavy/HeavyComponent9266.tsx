'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9266<T> = T extends (infer U)[]
  ? DeepReadonlyArray9266<U>
  : T extends object
  ? DeepReadonlyObject9266<T>
  : T;

interface DeepReadonlyArray9266<T> extends ReadonlyArray<DeepReadonly9266<T>> {}

type DeepReadonlyObject9266<T> = {
  readonly [P in keyof T]: DeepReadonly9266<T[P]>;
};

type UnionToIntersection9266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9266<T> = UnionToIntersection9266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9266<T extends unknown[], V> = [...T, V];

type TuplifyUnion9266<T, L = LastOf9266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9266<TuplifyUnion9266<Exclude<T, L>>, L>;

type DeepPartial9266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9266<T[P]> }
  : T;

type Paths9266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9266<K, Paths9266<T[K], Prev9266[D]>> : never }[keyof T]
  : never;

type Prev9266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9266 {
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

type ConfigPaths9266 = Paths9266<NestedConfig9266>;

interface HeavyProps9266 {
  config: DeepPartial9266<NestedConfig9266>;
  path?: ConfigPaths9266;
}

const HeavyComponent9266 = memo(function HeavyComponent9266({ config }: HeavyProps9266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9266.displayName = 'HeavyComponent9266';
export default HeavyComponent9266;
