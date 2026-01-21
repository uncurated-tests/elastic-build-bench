'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8937<T> = T extends (infer U)[]
  ? DeepReadonlyArray8937<U>
  : T extends object
  ? DeepReadonlyObject8937<T>
  : T;

interface DeepReadonlyArray8937<T> extends ReadonlyArray<DeepReadonly8937<T>> {}

type DeepReadonlyObject8937<T> = {
  readonly [P in keyof T]: DeepReadonly8937<T[P]>;
};

type UnionToIntersection8937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8937<T> = UnionToIntersection8937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8937<T extends unknown[], V> = [...T, V];

type TuplifyUnion8937<T, L = LastOf8937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8937<TuplifyUnion8937<Exclude<T, L>>, L>;

type DeepPartial8937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8937<T[P]> }
  : T;

type Paths8937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8937<K, Paths8937<T[K], Prev8937[D]>> : never }[keyof T]
  : never;

type Prev8937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8937 {
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

type ConfigPaths8937 = Paths8937<NestedConfig8937>;

interface HeavyProps8937 {
  config: DeepPartial8937<NestedConfig8937>;
  path?: ConfigPaths8937;
}

const HeavyComponent8937 = memo(function HeavyComponent8937({ config }: HeavyProps8937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8937.displayName = 'HeavyComponent8937';
export default HeavyComponent8937;
