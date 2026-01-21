'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8293<T> = T extends (infer U)[]
  ? DeepReadonlyArray8293<U>
  : T extends object
  ? DeepReadonlyObject8293<T>
  : T;

interface DeepReadonlyArray8293<T> extends ReadonlyArray<DeepReadonly8293<T>> {}

type DeepReadonlyObject8293<T> = {
  readonly [P in keyof T]: DeepReadonly8293<T[P]>;
};

type UnionToIntersection8293<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8293<T> = UnionToIntersection8293<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8293<T extends unknown[], V> = [...T, V];

type TuplifyUnion8293<T, L = LastOf8293<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8293<TuplifyUnion8293<Exclude<T, L>>, L>;

type DeepPartial8293<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8293<T[P]> }
  : T;

type Paths8293<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8293<K, Paths8293<T[K], Prev8293[D]>> : never }[keyof T]
  : never;

type Prev8293 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8293<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8293 {
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

type ConfigPaths8293 = Paths8293<NestedConfig8293>;

interface HeavyProps8293 {
  config: DeepPartial8293<NestedConfig8293>;
  path?: ConfigPaths8293;
}

const HeavyComponent8293 = memo(function HeavyComponent8293({ config }: HeavyProps8293) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8293) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8293 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8293: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8293.displayName = 'HeavyComponent8293';
export default HeavyComponent8293;
