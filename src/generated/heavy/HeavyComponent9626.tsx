'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9626<T> = T extends (infer U)[]
  ? DeepReadonlyArray9626<U>
  : T extends object
  ? DeepReadonlyObject9626<T>
  : T;

interface DeepReadonlyArray9626<T> extends ReadonlyArray<DeepReadonly9626<T>> {}

type DeepReadonlyObject9626<T> = {
  readonly [P in keyof T]: DeepReadonly9626<T[P]>;
};

type UnionToIntersection9626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9626<T> = UnionToIntersection9626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9626<T extends unknown[], V> = [...T, V];

type TuplifyUnion9626<T, L = LastOf9626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9626<TuplifyUnion9626<Exclude<T, L>>, L>;

type DeepPartial9626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9626<T[P]> }
  : T;

type Paths9626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9626<K, Paths9626<T[K], Prev9626[D]>> : never }[keyof T]
  : never;

type Prev9626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9626 {
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

type ConfigPaths9626 = Paths9626<NestedConfig9626>;

interface HeavyProps9626 {
  config: DeepPartial9626<NestedConfig9626>;
  path?: ConfigPaths9626;
}

const HeavyComponent9626 = memo(function HeavyComponent9626({ config }: HeavyProps9626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9626.displayName = 'HeavyComponent9626';
export default HeavyComponent9626;
