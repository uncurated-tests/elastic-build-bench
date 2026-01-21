'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8111<T> = T extends (infer U)[]
  ? DeepReadonlyArray8111<U>
  : T extends object
  ? DeepReadonlyObject8111<T>
  : T;

interface DeepReadonlyArray8111<T> extends ReadonlyArray<DeepReadonly8111<T>> {}

type DeepReadonlyObject8111<T> = {
  readonly [P in keyof T]: DeepReadonly8111<T[P]>;
};

type UnionToIntersection8111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8111<T> = UnionToIntersection8111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8111<T extends unknown[], V> = [...T, V];

type TuplifyUnion8111<T, L = LastOf8111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8111<TuplifyUnion8111<Exclude<T, L>>, L>;

type DeepPartial8111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8111<T[P]> }
  : T;

type Paths8111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8111<K, Paths8111<T[K], Prev8111[D]>> : never }[keyof T]
  : never;

type Prev8111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8111 {
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

type ConfigPaths8111 = Paths8111<NestedConfig8111>;

interface HeavyProps8111 {
  config: DeepPartial8111<NestedConfig8111>;
  path?: ConfigPaths8111;
}

const HeavyComponent8111 = memo(function HeavyComponent8111({ config }: HeavyProps8111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8111.displayName = 'HeavyComponent8111';
export default HeavyComponent8111;
