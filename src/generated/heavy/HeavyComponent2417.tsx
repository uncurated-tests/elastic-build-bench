'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2417<T> = T extends (infer U)[]
  ? DeepReadonlyArray2417<U>
  : T extends object
  ? DeepReadonlyObject2417<T>
  : T;

interface DeepReadonlyArray2417<T> extends ReadonlyArray<DeepReadonly2417<T>> {}

type DeepReadonlyObject2417<T> = {
  readonly [P in keyof T]: DeepReadonly2417<T[P]>;
};

type UnionToIntersection2417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2417<T> = UnionToIntersection2417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2417<T extends unknown[], V> = [...T, V];

type TuplifyUnion2417<T, L = LastOf2417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2417<TuplifyUnion2417<Exclude<T, L>>, L>;

type DeepPartial2417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2417<T[P]> }
  : T;

type Paths2417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2417<K, Paths2417<T[K], Prev2417[D]>> : never }[keyof T]
  : never;

type Prev2417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2417 {
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

type ConfigPaths2417 = Paths2417<NestedConfig2417>;

interface HeavyProps2417 {
  config: DeepPartial2417<NestedConfig2417>;
  path?: ConfigPaths2417;
}

const HeavyComponent2417 = memo(function HeavyComponent2417({ config }: HeavyProps2417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2417.displayName = 'HeavyComponent2417';
export default HeavyComponent2417;
