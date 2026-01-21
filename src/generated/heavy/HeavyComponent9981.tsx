'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9981<T> = T extends (infer U)[]
  ? DeepReadonlyArray9981<U>
  : T extends object
  ? DeepReadonlyObject9981<T>
  : T;

interface DeepReadonlyArray9981<T> extends ReadonlyArray<DeepReadonly9981<T>> {}

type DeepReadonlyObject9981<T> = {
  readonly [P in keyof T]: DeepReadonly9981<T[P]>;
};

type UnionToIntersection9981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9981<T> = UnionToIntersection9981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9981<T extends unknown[], V> = [...T, V];

type TuplifyUnion9981<T, L = LastOf9981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9981<TuplifyUnion9981<Exclude<T, L>>, L>;

type DeepPartial9981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9981<T[P]> }
  : T;

type Paths9981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9981<K, Paths9981<T[K], Prev9981[D]>> : never }[keyof T]
  : never;

type Prev9981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9981 {
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

type ConfigPaths9981 = Paths9981<NestedConfig9981>;

interface HeavyProps9981 {
  config: DeepPartial9981<NestedConfig9981>;
  path?: ConfigPaths9981;
}

const HeavyComponent9981 = memo(function HeavyComponent9981({ config }: HeavyProps9981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9981.displayName = 'HeavyComponent9981';
export default HeavyComponent9981;
