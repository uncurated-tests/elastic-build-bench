'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly35<T> = T extends (infer U)[]
  ? DeepReadonlyArray35<U>
  : T extends object
  ? DeepReadonlyObject35<T>
  : T;

interface DeepReadonlyArray35<T> extends ReadonlyArray<DeepReadonly35<T>> {}

type DeepReadonlyObject35<T> = {
  readonly [P in keyof T]: DeepReadonly35<T[P]>;
};

type UnionToIntersection35<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf35<T> = UnionToIntersection35<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push35<T extends unknown[], V> = [...T, V];

type TuplifyUnion35<T, L = LastOf35<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push35<TuplifyUnion35<Exclude<T, L>>, L>;

type DeepPartial35<T> = T extends object
  ? { [P in keyof T]?: DeepPartial35<T[P]> }
  : T;

type Paths35<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join35<K, Paths35<T[K], Prev35[D]>> : never }[keyof T]
  : never;

type Prev35 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join35<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig35 {
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

type ConfigPaths35 = Paths35<NestedConfig35>;

interface HeavyProps35 {
  config: DeepPartial35<NestedConfig35>;
  path?: ConfigPaths35;
}

const HeavyComponent35 = memo(function HeavyComponent35({ config }: HeavyProps35) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 35) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-35 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H35: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent35.displayName = 'HeavyComponent35';
export default HeavyComponent35;
