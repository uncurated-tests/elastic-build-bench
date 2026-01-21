'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8090<T> = T extends (infer U)[]
  ? DeepReadonlyArray8090<U>
  : T extends object
  ? DeepReadonlyObject8090<T>
  : T;

interface DeepReadonlyArray8090<T> extends ReadonlyArray<DeepReadonly8090<T>> {}

type DeepReadonlyObject8090<T> = {
  readonly [P in keyof T]: DeepReadonly8090<T[P]>;
};

type UnionToIntersection8090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8090<T> = UnionToIntersection8090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8090<T extends unknown[], V> = [...T, V];

type TuplifyUnion8090<T, L = LastOf8090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8090<TuplifyUnion8090<Exclude<T, L>>, L>;

type DeepPartial8090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8090<T[P]> }
  : T;

type Paths8090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8090<K, Paths8090<T[K], Prev8090[D]>> : never }[keyof T]
  : never;

type Prev8090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8090 {
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

type ConfigPaths8090 = Paths8090<NestedConfig8090>;

interface HeavyProps8090 {
  config: DeepPartial8090<NestedConfig8090>;
  path?: ConfigPaths8090;
}

const HeavyComponent8090 = memo(function HeavyComponent8090({ config }: HeavyProps8090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8090.displayName = 'HeavyComponent8090';
export default HeavyComponent8090;
