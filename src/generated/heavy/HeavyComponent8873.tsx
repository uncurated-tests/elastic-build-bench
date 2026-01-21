'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8873<T> = T extends (infer U)[]
  ? DeepReadonlyArray8873<U>
  : T extends object
  ? DeepReadonlyObject8873<T>
  : T;

interface DeepReadonlyArray8873<T> extends ReadonlyArray<DeepReadonly8873<T>> {}

type DeepReadonlyObject8873<T> = {
  readonly [P in keyof T]: DeepReadonly8873<T[P]>;
};

type UnionToIntersection8873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8873<T> = UnionToIntersection8873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8873<T extends unknown[], V> = [...T, V];

type TuplifyUnion8873<T, L = LastOf8873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8873<TuplifyUnion8873<Exclude<T, L>>, L>;

type DeepPartial8873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8873<T[P]> }
  : T;

type Paths8873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8873<K, Paths8873<T[K], Prev8873[D]>> : never }[keyof T]
  : never;

type Prev8873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8873 {
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

type ConfigPaths8873 = Paths8873<NestedConfig8873>;

interface HeavyProps8873 {
  config: DeepPartial8873<NestedConfig8873>;
  path?: ConfigPaths8873;
}

const HeavyComponent8873 = memo(function HeavyComponent8873({ config }: HeavyProps8873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8873.displayName = 'HeavyComponent8873';
export default HeavyComponent8873;
