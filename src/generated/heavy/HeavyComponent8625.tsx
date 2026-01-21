'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8625<T> = T extends (infer U)[]
  ? DeepReadonlyArray8625<U>
  : T extends object
  ? DeepReadonlyObject8625<T>
  : T;

interface DeepReadonlyArray8625<T> extends ReadonlyArray<DeepReadonly8625<T>> {}

type DeepReadonlyObject8625<T> = {
  readonly [P in keyof T]: DeepReadonly8625<T[P]>;
};

type UnionToIntersection8625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8625<T> = UnionToIntersection8625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8625<T extends unknown[], V> = [...T, V];

type TuplifyUnion8625<T, L = LastOf8625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8625<TuplifyUnion8625<Exclude<T, L>>, L>;

type DeepPartial8625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8625<T[P]> }
  : T;

type Paths8625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8625<K, Paths8625<T[K], Prev8625[D]>> : never }[keyof T]
  : never;

type Prev8625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8625 {
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

type ConfigPaths8625 = Paths8625<NestedConfig8625>;

interface HeavyProps8625 {
  config: DeepPartial8625<NestedConfig8625>;
  path?: ConfigPaths8625;
}

const HeavyComponent8625 = memo(function HeavyComponent8625({ config }: HeavyProps8625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8625.displayName = 'HeavyComponent8625';
export default HeavyComponent8625;
