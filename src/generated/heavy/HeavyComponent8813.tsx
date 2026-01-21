'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8813<T> = T extends (infer U)[]
  ? DeepReadonlyArray8813<U>
  : T extends object
  ? DeepReadonlyObject8813<T>
  : T;

interface DeepReadonlyArray8813<T> extends ReadonlyArray<DeepReadonly8813<T>> {}

type DeepReadonlyObject8813<T> = {
  readonly [P in keyof T]: DeepReadonly8813<T[P]>;
};

type UnionToIntersection8813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8813<T> = UnionToIntersection8813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8813<T extends unknown[], V> = [...T, V];

type TuplifyUnion8813<T, L = LastOf8813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8813<TuplifyUnion8813<Exclude<T, L>>, L>;

type DeepPartial8813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8813<T[P]> }
  : T;

type Paths8813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8813<K, Paths8813<T[K], Prev8813[D]>> : never }[keyof T]
  : never;

type Prev8813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8813 {
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

type ConfigPaths8813 = Paths8813<NestedConfig8813>;

interface HeavyProps8813 {
  config: DeepPartial8813<NestedConfig8813>;
  path?: ConfigPaths8813;
}

const HeavyComponent8813 = memo(function HeavyComponent8813({ config }: HeavyProps8813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8813.displayName = 'HeavyComponent8813';
export default HeavyComponent8813;
