'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8540<T> = T extends (infer U)[]
  ? DeepReadonlyArray8540<U>
  : T extends object
  ? DeepReadonlyObject8540<T>
  : T;

interface DeepReadonlyArray8540<T> extends ReadonlyArray<DeepReadonly8540<T>> {}

type DeepReadonlyObject8540<T> = {
  readonly [P in keyof T]: DeepReadonly8540<T[P]>;
};

type UnionToIntersection8540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8540<T> = UnionToIntersection8540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8540<T extends unknown[], V> = [...T, V];

type TuplifyUnion8540<T, L = LastOf8540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8540<TuplifyUnion8540<Exclude<T, L>>, L>;

type DeepPartial8540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8540<T[P]> }
  : T;

type Paths8540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8540<K, Paths8540<T[K], Prev8540[D]>> : never }[keyof T]
  : never;

type Prev8540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8540 {
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

type ConfigPaths8540 = Paths8540<NestedConfig8540>;

interface HeavyProps8540 {
  config: DeepPartial8540<NestedConfig8540>;
  path?: ConfigPaths8540;
}

const HeavyComponent8540 = memo(function HeavyComponent8540({ config }: HeavyProps8540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8540.displayName = 'HeavyComponent8540';
export default HeavyComponent8540;
