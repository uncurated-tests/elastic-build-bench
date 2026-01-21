'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8573<T> = T extends (infer U)[]
  ? DeepReadonlyArray8573<U>
  : T extends object
  ? DeepReadonlyObject8573<T>
  : T;

interface DeepReadonlyArray8573<T> extends ReadonlyArray<DeepReadonly8573<T>> {}

type DeepReadonlyObject8573<T> = {
  readonly [P in keyof T]: DeepReadonly8573<T[P]>;
};

type UnionToIntersection8573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8573<T> = UnionToIntersection8573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8573<T extends unknown[], V> = [...T, V];

type TuplifyUnion8573<T, L = LastOf8573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8573<TuplifyUnion8573<Exclude<T, L>>, L>;

type DeepPartial8573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8573<T[P]> }
  : T;

type Paths8573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8573<K, Paths8573<T[K], Prev8573[D]>> : never }[keyof T]
  : never;

type Prev8573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8573 {
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

type ConfigPaths8573 = Paths8573<NestedConfig8573>;

interface HeavyProps8573 {
  config: DeepPartial8573<NestedConfig8573>;
  path?: ConfigPaths8573;
}

const HeavyComponent8573 = memo(function HeavyComponent8573({ config }: HeavyProps8573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8573.displayName = 'HeavyComponent8573';
export default HeavyComponent8573;
