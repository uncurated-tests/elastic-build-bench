'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8722<T> = T extends (infer U)[]
  ? DeepReadonlyArray8722<U>
  : T extends object
  ? DeepReadonlyObject8722<T>
  : T;

interface DeepReadonlyArray8722<T> extends ReadonlyArray<DeepReadonly8722<T>> {}

type DeepReadonlyObject8722<T> = {
  readonly [P in keyof T]: DeepReadonly8722<T[P]>;
};

type UnionToIntersection8722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8722<T> = UnionToIntersection8722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8722<T extends unknown[], V> = [...T, V];

type TuplifyUnion8722<T, L = LastOf8722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8722<TuplifyUnion8722<Exclude<T, L>>, L>;

type DeepPartial8722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8722<T[P]> }
  : T;

type Paths8722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8722<K, Paths8722<T[K], Prev8722[D]>> : never }[keyof T]
  : never;

type Prev8722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8722 {
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

type ConfigPaths8722 = Paths8722<NestedConfig8722>;

interface HeavyProps8722 {
  config: DeepPartial8722<NestedConfig8722>;
  path?: ConfigPaths8722;
}

const HeavyComponent8722 = memo(function HeavyComponent8722({ config }: HeavyProps8722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8722.displayName = 'HeavyComponent8722';
export default HeavyComponent8722;
