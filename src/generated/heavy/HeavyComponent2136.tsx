'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2136<T> = T extends (infer U)[]
  ? DeepReadonlyArray2136<U>
  : T extends object
  ? DeepReadonlyObject2136<T>
  : T;

interface DeepReadonlyArray2136<T> extends ReadonlyArray<DeepReadonly2136<T>> {}

type DeepReadonlyObject2136<T> = {
  readonly [P in keyof T]: DeepReadonly2136<T[P]>;
};

type UnionToIntersection2136<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2136<T> = UnionToIntersection2136<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2136<T extends unknown[], V> = [...T, V];

type TuplifyUnion2136<T, L = LastOf2136<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2136<TuplifyUnion2136<Exclude<T, L>>, L>;

type DeepPartial2136<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2136<T[P]> }
  : T;

type Paths2136<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2136<K, Paths2136<T[K], Prev2136[D]>> : never }[keyof T]
  : never;

type Prev2136 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2136<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2136 {
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

type ConfigPaths2136 = Paths2136<NestedConfig2136>;

interface HeavyProps2136 {
  config: DeepPartial2136<NestedConfig2136>;
  path?: ConfigPaths2136;
}

const HeavyComponent2136 = memo(function HeavyComponent2136({ config }: HeavyProps2136) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2136) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2136 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2136: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2136.displayName = 'HeavyComponent2136';
export default HeavyComponent2136;
