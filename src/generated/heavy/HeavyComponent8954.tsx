'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8954<T> = T extends (infer U)[]
  ? DeepReadonlyArray8954<U>
  : T extends object
  ? DeepReadonlyObject8954<T>
  : T;

interface DeepReadonlyArray8954<T> extends ReadonlyArray<DeepReadonly8954<T>> {}

type DeepReadonlyObject8954<T> = {
  readonly [P in keyof T]: DeepReadonly8954<T[P]>;
};

type UnionToIntersection8954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8954<T> = UnionToIntersection8954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8954<T extends unknown[], V> = [...T, V];

type TuplifyUnion8954<T, L = LastOf8954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8954<TuplifyUnion8954<Exclude<T, L>>, L>;

type DeepPartial8954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8954<T[P]> }
  : T;

type Paths8954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8954<K, Paths8954<T[K], Prev8954[D]>> : never }[keyof T]
  : never;

type Prev8954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8954 {
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

type ConfigPaths8954 = Paths8954<NestedConfig8954>;

interface HeavyProps8954 {
  config: DeepPartial8954<NestedConfig8954>;
  path?: ConfigPaths8954;
}

const HeavyComponent8954 = memo(function HeavyComponent8954({ config }: HeavyProps8954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8954.displayName = 'HeavyComponent8954';
export default HeavyComponent8954;
