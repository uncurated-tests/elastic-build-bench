'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9011<T> = T extends (infer U)[]
  ? DeepReadonlyArray9011<U>
  : T extends object
  ? DeepReadonlyObject9011<T>
  : T;

interface DeepReadonlyArray9011<T> extends ReadonlyArray<DeepReadonly9011<T>> {}

type DeepReadonlyObject9011<T> = {
  readonly [P in keyof T]: DeepReadonly9011<T[P]>;
};

type UnionToIntersection9011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9011<T> = UnionToIntersection9011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9011<T extends unknown[], V> = [...T, V];

type TuplifyUnion9011<T, L = LastOf9011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9011<TuplifyUnion9011<Exclude<T, L>>, L>;

type DeepPartial9011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9011<T[P]> }
  : T;

type Paths9011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9011<K, Paths9011<T[K], Prev9011[D]>> : never }[keyof T]
  : never;

type Prev9011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9011 {
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

type ConfigPaths9011 = Paths9011<NestedConfig9011>;

interface HeavyProps9011 {
  config: DeepPartial9011<NestedConfig9011>;
  path?: ConfigPaths9011;
}

const HeavyComponent9011 = memo(function HeavyComponent9011({ config }: HeavyProps9011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9011.displayName = 'HeavyComponent9011';
export default HeavyComponent9011;
