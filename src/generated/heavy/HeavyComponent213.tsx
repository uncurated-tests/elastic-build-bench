'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly213<T> = T extends (infer U)[]
  ? DeepReadonlyArray213<U>
  : T extends object
  ? DeepReadonlyObject213<T>
  : T;

interface DeepReadonlyArray213<T> extends ReadonlyArray<DeepReadonly213<T>> {}

type DeepReadonlyObject213<T> = {
  readonly [P in keyof T]: DeepReadonly213<T[P]>;
};

type UnionToIntersection213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf213<T> = UnionToIntersection213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push213<T extends unknown[], V> = [...T, V];

type TuplifyUnion213<T, L = LastOf213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push213<TuplifyUnion213<Exclude<T, L>>, L>;

type DeepPartial213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial213<T[P]> }
  : T;

type Paths213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join213<K, Paths213<T[K], Prev213[D]>> : never }[keyof T]
  : never;

type Prev213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig213 {
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

type ConfigPaths213 = Paths213<NestedConfig213>;

interface HeavyProps213 {
  config: DeepPartial213<NestedConfig213>;
  path?: ConfigPaths213;
}

const HeavyComponent213 = memo(function HeavyComponent213({ config }: HeavyProps213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent213.displayName = 'HeavyComponent213';
export default HeavyComponent213;
