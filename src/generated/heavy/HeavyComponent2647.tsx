'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2647<T> = T extends (infer U)[]
  ? DeepReadonlyArray2647<U>
  : T extends object
  ? DeepReadonlyObject2647<T>
  : T;

interface DeepReadonlyArray2647<T> extends ReadonlyArray<DeepReadonly2647<T>> {}

type DeepReadonlyObject2647<T> = {
  readonly [P in keyof T]: DeepReadonly2647<T[P]>;
};

type UnionToIntersection2647<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2647<T> = UnionToIntersection2647<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2647<T extends unknown[], V> = [...T, V];

type TuplifyUnion2647<T, L = LastOf2647<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2647<TuplifyUnion2647<Exclude<T, L>>, L>;

type DeepPartial2647<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2647<T[P]> }
  : T;

type Paths2647<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2647<K, Paths2647<T[K], Prev2647[D]>> : never }[keyof T]
  : never;

type Prev2647 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2647<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2647 {
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

type ConfigPaths2647 = Paths2647<NestedConfig2647>;

interface HeavyProps2647 {
  config: DeepPartial2647<NestedConfig2647>;
  path?: ConfigPaths2647;
}

const HeavyComponent2647 = memo(function HeavyComponent2647({ config }: HeavyProps2647) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2647) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2647 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2647: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2647.displayName = 'HeavyComponent2647';
export default HeavyComponent2647;
