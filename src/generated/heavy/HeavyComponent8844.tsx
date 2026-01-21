'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8844<T> = T extends (infer U)[]
  ? DeepReadonlyArray8844<U>
  : T extends object
  ? DeepReadonlyObject8844<T>
  : T;

interface DeepReadonlyArray8844<T> extends ReadonlyArray<DeepReadonly8844<T>> {}

type DeepReadonlyObject8844<T> = {
  readonly [P in keyof T]: DeepReadonly8844<T[P]>;
};

type UnionToIntersection8844<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8844<T> = UnionToIntersection8844<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8844<T extends unknown[], V> = [...T, V];

type TuplifyUnion8844<T, L = LastOf8844<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8844<TuplifyUnion8844<Exclude<T, L>>, L>;

type DeepPartial8844<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8844<T[P]> }
  : T;

type Paths8844<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8844<K, Paths8844<T[K], Prev8844[D]>> : never }[keyof T]
  : never;

type Prev8844 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8844<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8844 {
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

type ConfigPaths8844 = Paths8844<NestedConfig8844>;

interface HeavyProps8844 {
  config: DeepPartial8844<NestedConfig8844>;
  path?: ConfigPaths8844;
}

const HeavyComponent8844 = memo(function HeavyComponent8844({ config }: HeavyProps8844) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8844) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8844 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8844: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8844.displayName = 'HeavyComponent8844';
export default HeavyComponent8844;
