'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly981<T> = T extends (infer U)[]
  ? DeepReadonlyArray981<U>
  : T extends object
  ? DeepReadonlyObject981<T>
  : T;

interface DeepReadonlyArray981<T> extends ReadonlyArray<DeepReadonly981<T>> {}

type DeepReadonlyObject981<T> = {
  readonly [P in keyof T]: DeepReadonly981<T[P]>;
};

type UnionToIntersection981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf981<T> = UnionToIntersection981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push981<T extends unknown[], V> = [...T, V];

type TuplifyUnion981<T, L = LastOf981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push981<TuplifyUnion981<Exclude<T, L>>, L>;

type DeepPartial981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial981<T[P]> }
  : T;

type Paths981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join981<K, Paths981<T[K], Prev981[D]>> : never }[keyof T]
  : never;

type Prev981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig981 {
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

type ConfigPaths981 = Paths981<NestedConfig981>;

interface HeavyProps981 {
  config: DeepPartial981<NestedConfig981>;
  path?: ConfigPaths981;
}

const HeavyComponent981 = memo(function HeavyComponent981({ config }: HeavyProps981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent981.displayName = 'HeavyComponent981';
export default HeavyComponent981;
