'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8737<T> = T extends (infer U)[]
  ? DeepReadonlyArray8737<U>
  : T extends object
  ? DeepReadonlyObject8737<T>
  : T;

interface DeepReadonlyArray8737<T> extends ReadonlyArray<DeepReadonly8737<T>> {}

type DeepReadonlyObject8737<T> = {
  readonly [P in keyof T]: DeepReadonly8737<T[P]>;
};

type UnionToIntersection8737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8737<T> = UnionToIntersection8737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8737<T extends unknown[], V> = [...T, V];

type TuplifyUnion8737<T, L = LastOf8737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8737<TuplifyUnion8737<Exclude<T, L>>, L>;

type DeepPartial8737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8737<T[P]> }
  : T;

type Paths8737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8737<K, Paths8737<T[K], Prev8737[D]>> : never }[keyof T]
  : never;

type Prev8737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8737 {
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

type ConfigPaths8737 = Paths8737<NestedConfig8737>;

interface HeavyProps8737 {
  config: DeepPartial8737<NestedConfig8737>;
  path?: ConfigPaths8737;
}

const HeavyComponent8737 = memo(function HeavyComponent8737({ config }: HeavyProps8737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8737.displayName = 'HeavyComponent8737';
export default HeavyComponent8737;
